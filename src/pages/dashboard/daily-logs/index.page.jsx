import {useEffect, useState} from "react";
import {createDailyLogs, fetchDailyLogs} from "../../api";
import {FloatButton, Layout, Table, Tabs} from "antd";
import {Line} from "@ant-design/charts";
import {FileAddFilled} from "@ant-design/icons";
import {CreateMentalHealthModal} from "./components/add-mental-health-record.modal";

const contentStyle = {
    textAlign: 'center',
    color: '#fff',
    minHeight: 'calc(100%) !important'
};
const layoutStyle = {
    height: 'calc(100%)',
    margin: 0,
    padding: 0
};
export const LogIndexPage = () => {
    const [localState, setLocalState] = useState({data: [], isModalOpen: false, loading: true});
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        fetchDailyLogs().then(res => res.data).then(d => {
            setLocalState(l => ({...l, data: d, loading: false}));
        });
    }, [refresh]);
    return (<Layout style={layoutStyle}>
        <Layout.Content style={contentStyle} gap="middle">
            <Tabs
                tabPosition="left"
                items={([
                    {
                        label: `Grid View`,
                        key: 'grid',
                        children: <GridViewComponent loading={localState.loading}
                                                     data={localState.data}></GridViewComponent>,
                    },
                    {
                        label: `Trend`,
                        key: 'trend',
                        children: <TrendViewComponent loading={localState.loading}
                                                      data={localState.data}></TrendViewComponent>,
                    },
                ])}
            />
            <CreateMentalHealthModal open={localState.isModalOpen} onCancel={() => {
                setLocalState({...localState, isModalOpen: false});
            }} onSubmit={(payload) => {
                createDailyLogs(payload).then(res => {
                    setRefresh((!refresh));
                    setLocalState(l => ({...localState, loading: true, isModalOpen: false}));
                });
            }}></CreateMentalHealthModal>
            <FloatButton icon={<FileAddFilled/>} type="primary"
                         onClick={() => {
                             setLocalState({...localState, isModalOpen: true});
                         }}/>
        </Layout.Content>
    </Layout>);
}

const GridViewComponent = ({data, loading}) => {
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Anxiety Symptoms',
            dataIndex: 'anxietySymptoms',
            key: 'anxietySymptoms',
        },
        {
            title: 'Depression Symptoms',
            dataIndex: 'depressionSymptoms',
            key: 'depressionSymptoms',
        },
        {
            title: 'Physical Activity Type',
            dataIndex: 'physicalActivityType',
            key: 'physicalActivityType',
        },
        {
            title: 'Sleep Disturbances',
            dataIndex: 'sleepDisturbances',
            key: 'sleepDisturbances',
        },
        {
            title: 'Sleep Quality',
            dataIndex: 'sleepQuality',
            key: 'sleepQuality',
        },
        {
            title: 'Anxiety Level',
            dataIndex: 'anxietyLevel',
            key: 'anxietyLevel',
        },
        {
            title: 'Physical Activity Duration',
            dataIndex: 'physicalActivityDuration',
            key: 'physicalActivityDuration',
        },
        {
            title: 'Sleep Hours',
            dataIndex: 'sleepHours',
            key: 'sleepHours',
        },
        {
            title: 'Social Interaction Frequency',
            dataIndex: 'socialInteractionFrequency',
            key: 'socialInteractionFrequency',
        },
        {
            title: 'Stress Level',
            dataIndex: 'stressLevel',
            key: 'stressLevel',
        }
    ];
    return (<>
        <Table columns={columns} dataSource={data} loading={loading}/>
    </>);
}

const TrendViewComponent = ({data, loading}) => {
    const l = data.map(d => ([
        {date: d.date, category: 'Mood Rating', value: d.moodRating, color: "#ff5556"},
        {date: d.date, category: 'Physical Activity Duration', value: d.physicalActivityDuration, color: "#a4e057"},
        {date: d.date, category: 'Sleep Hours', value: d.sleepHours, color: "#5777e0"},
    ])).flat();
    console.log(l);
    const props = {
        data: l,
        xField: 'date',
        yField: 'value',
        seriesField: 'category',
        colorField: 'color',
        position: 'middle',
    };

    return <Line {...props} loading={loading}/>
}

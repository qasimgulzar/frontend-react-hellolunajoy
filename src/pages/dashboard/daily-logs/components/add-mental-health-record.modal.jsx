import React, {useState} from 'react';
import {Modal, Button, Form, Input, InputNumber, DatePicker, Select} from 'antd';
import moment from 'moment';

export const CreateMentalHealthModal = ({open, onCancel, onSubmit}) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                // Format date to string if needed
                values.date = values.date.format('YYYY-MM-DD');
                onSubmit(values);
                form.resetFields();
            })
            .catch(info => {
                console.log('Validation Failed:', info);
            });
    };
    return (
        <Modal
            title="Submit Daily Log"
            visible={open}
            onOk={handleOk}
            onCancel={onCancel}
            okText="Submit"
            cancelText="Cancel"
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    moodRating: 7,
                    anxietyLevel: 4,
                    sleepHours: 7.5,
                    sleepQuality: 'Good',
                    sleepDisturbances: 'None',
                    physicalActivityType: 'Running',
                    physicalActivityDuration: 30,
                    socialInteractionFrequency: 3,
                    stressLevel: 5,
                    depressionSymptoms: 'Mild sadness',
                    anxietySymptoms: 'Occasional worry',
                    date: moment('2024-09-10'),
                    userId: 1,
                }}
            >
                <Form.Item
                    name="moodRating"
                    label="Mood Rating (1-10)"
                    rules={[{required: true, message: 'Please input your mood rating!'}]}
                >
                    <InputNumber min={1} max={10}/>
                </Form.Item>

                <Form.Item
                    name="anxietyLevel"
                    label="Anxiety Level (1-10)"
                    rules={[{required: true, message: 'Please input your anxiety level!'}]}
                >
                    <InputNumber min={1} max={10}/>
                </Form.Item>

                <Form.Item
                    name="sleepHours"
                    label="Sleep Hours"
                    rules={[{required: true, message: 'Please input your sleep hours!'}]}
                >
                    <InputNumber min={0} step={0.5}/>
                </Form.Item>

                <Form.Item
                    name="sleepQuality"
                    label="Sleep Quality"
                    rules={[{required: true, message: 'Please input your sleep quality!'}]}
                >
                    <Select>
                        <Select.Option value="Good">Good</Select.Option>
                        <Select.Option value="Average">Average</Select.Option>
                        <Select.Option value="Poor">Poor</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="sleepDisturbances"
                    label="Sleep Disturbances"
                    rules={[{required: true, message: 'Please input any sleep disturbances!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="physicalActivityType"
                    label="Physical Activity Type"
                    rules={[{required: true, message: 'Please input your physical activity type!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="physicalActivityDuration"
                    label="Physical Activity Duration (minutes)"
                    rules={[{required: true, message: 'Please input the duration of physical activity!'}]}
                >
                    <InputNumber min={0}/>
                </Form.Item>

                <Form.Item
                    name="socialInteractionFrequency"
                    label="Social Interaction Frequency"
                    rules={[{required: true, message: 'Please input your social interaction frequency!'}]}
                >
                    <InputNumber min={0}/>
                </Form.Item>

                <Form.Item
                    name="stressLevel"
                    label="Stress Level (1-10)"
                    rules={[{required: true, message: 'Please input your stress level!'}]}
                >
                    <InputNumber min={1} max={10}/>
                </Form.Item>

                <Form.Item
                    name="depressionSymptoms"
                    label="Depression Symptoms"
                    rules={[{required: true, message: 'Please input your depression symptoms!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="anxietySymptoms"
                    label="Anxiety Symptoms"
                    rules={[{required: true, message: 'Please input your anxiety symptoms!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="date"
                    label="Date"
                    rules={[{required: true, message: 'Please select the date!'}]}
                >
                    <DatePicker/>
                </Form.Item>
            </Form>
        </Modal>
    )
}
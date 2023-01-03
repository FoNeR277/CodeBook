import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import Calendar from 'react-calendar';

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: 28 }}>
                <Header icon='filter' attached color='orange' content='Filters' />
                <Menu.Item content='All Events' />
                <Menu.Item content="I'm going" />
                <Menu.Item content="I'm hosting" />
            </Menu>
            <Header icon='calendar' attached color='orange' content='Select date' />
            <Calendar />
        </>
    );
}
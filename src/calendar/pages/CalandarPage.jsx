import { Calendar } from 'react-big-calendar';
//STUB - import date-fns
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

//NOTE - local Import
import { CalendarEventBox, CalendarModal, Navbar } from '../';
import { getMessagesES, localizer } from '../../helpers';
import { useState } from 'react';

const events = [
  {
    title: 'Cumpleaños Alejandro',
    notes: 'Comprar pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: 'XXX',
      name: 'Pedro',
    },
  },
];

export const CalandarPage = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'week',
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#2d2488',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };
    return {
      style,
    };
  };
  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };
  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setlastView(event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 90px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};

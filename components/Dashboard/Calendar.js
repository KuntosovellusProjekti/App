import React, {useState} from 'react';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';



const Calendars = () => {
  const [selected, setSelected] = useState('');
  const Swimming = {key: 'swimming', color: 'blue', selectedDotColor: 'blue'};
  const Cycling = {key: 'cycling', color: 'red', selectedDotColor: 'blue'};
  const Running = {key: 'massage', color: 'purple', selectedDotColor: 'blue'};
  const Gym = {key: 'workout', color: 'green'};

  return (
    
    <CalendarList
      onDayPress={day => {
        setSelected(day.dateString);
        
        
      }}
      
      horizontal={true}

      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
      }}
      
      markingType={'multi-dot'}
      markedDates={{
            '2024-04-17': {dots: [Gym],selected: true, marked: true, selectedColor: 'grey'},
            '2024-04-18': {dots: [Cycling],marked: true},
            '2024-04-19': {dots: [Swimming],selected: true, marked: true, selectedColor: 'grey'},
            '2024-04-20': {dots: [Running],selected: true, marked: true, selectedColor: 'grey'},
            [selected]: {selected: true, marked: true, selectedColor: 'grey'},
         
      }}
    />
  );
};
LocaleConfig.locales['fi'] = {
    monthNames: [
      'Tammikuu',
      'Helmikuu',
      'Maaliskuu',
      'Huhtikuu',
      'Toukokuu',
      'Kesäkuu',
      'Heinäkuu',
      'Elokuu',
      'Syyskuu',
      'Lokakuu',
      'Marraskuu',
      'Joulukuu'
    ],
    monthNames: [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäkuu',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu'
    ],
    monthNamesShort: ['Tammi.', 'Helmi.', 'Maalis', 'Huhti', 'Touko', 'Kesä', 'Heinä.', 'Elo', 'Syys.', 'Loka.', 'Marras.', 'Joulu.'],
    dayNames: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
    dayNamesShort: ['Su.', 'Ma.', 'Ti.', 'Ke.', 'To.', 'Pe.', 'La.'],
    today: "Tänään"
  };
  
  LocaleConfig.defaultLocale = 'fi';

export default Calendars;
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';



const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
        
      }}
      
      markedDates={{
        
            '2024-04-17': {selected: true, marked: true, selectedColor: 'blue'},
            '2024-04-18': {marked: true},
            '2024-04-19': {selected: true, marked: true, selectedColor: 'blue'}
         
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

export default App;
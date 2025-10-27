import { useState, useEffect } from 'react';
import { format, isToday, isTomorrow, addDays } from 'date-fns';
import { de } from 'date-fns/locale';

interface OpeningHours {
  day: number; // 0 = Sunday, 1 = Monday, etc.
  open: string;
  close: string;
  closed?: boolean;
}

// Opening hours based on typical German restaurant schedule
const OPENING_HOURS: OpeningHours[] = [
  { day: 0, open: '11:00', close: '22:00' }, // Sunday
  { day: 1, open: '11:00', close: '23:00' }, // Monday
  { day: 2, open: '11:00', close: '23:00' }, // Tuesday
  { day: 3, open: '11:00', close: '23:00' }, // Wednesday
  { day: 4, open: '11:00', close: '23:00' }, // Thursday
  { day: 5, open: '11:00', close: '23:00' }, // Friday
  { day: 6, open: '11:00', close: '23:00' }, // Saturday
];

interface OpeningStatus {
  isOpen: boolean;
  isClosed: boolean;
  message: string;
  statusColor: 'green' | 'red';
}

export const useOpeningStatus = (): OpeningStatus => {
  const [status, setStatus] = useState<OpeningStatus>({
    isOpen: false,
    isClosed: false,
    message: '',
    statusColor: 'green'
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentTime = format(now, 'HH:mm');
      
      const todayHours = OPENING_HOURS.find(h => h.day === currentDay);
      
      if (!todayHours || todayHours.closed) {
        // Restaurant is closed today, check tomorrow
        const tomorrow = addDays(now, 1);
        const tomorrowDay = tomorrow.getDay();
        const tomorrowHours = OPENING_HOURS.find(h => h.day === tomorrowDay);
        
        if (tomorrowHours && !tomorrowHours.closed) {
          setStatus({
            isOpen: false,
            isClosed: true,
            message: `Öffnet morgen um ${tomorrowHours.open} Uhr`,
            statusColor: 'red'
          });
        } else {
          setStatus({
            isOpen: false,
            isClosed: true,
            message: 'Geschlossen',
            statusColor: 'red'
          });
        }
        return;
      }

      // Check if currently open
      if (currentTime >= todayHours.open && currentTime < todayHours.close) {
        setStatus({
          isOpen: true,
          isClosed: false,
          message: `Heute geöffnet bis ${todayHours.close} Uhr`,
          statusColor: 'green'
        });
      } else if (currentTime < todayHours.open) {
        // Before opening time today
        setStatus({
          isOpen: false,
          isClosed: true,
          message: `Öffnet heute um ${todayHours.open} Uhr`,
          statusColor: 'red'
        });
      } else {
        // After closing time, check tomorrow
        const tomorrow = addDays(now, 1);
        const tomorrowDay = tomorrow.getDay();
        const tomorrowHours = OPENING_HOURS.find(h => h.day === tomorrowDay);
        
        if (tomorrowHours && !tomorrowHours.closed) {
          setStatus({
            isOpen: false,
            isClosed: true,
            message: `Öffnet morgen um ${tomorrowHours.open} Uhr`,
            statusColor: 'red'
          });
        } else {
          setStatus({
            isOpen: false,
            isClosed: true,
            message: 'Geschlossen',
            statusColor: 'red'
          });
        }
      }
    };

    updateStatus();
    // Update every minute
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return status;
};

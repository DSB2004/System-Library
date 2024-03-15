export const currentTime = () => {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, '0');
    const min = String(time.getMinutes()).padStart(2, '0');
    const num_hour = time.getHours();
    const num_min = time.getMinutes();
    const sec = String(time.getSeconds()).padStart(2, '0');
    const indicator = (hour < 12) ? "AM" : "PM";
    const day = String(time.getDate()).padStart(2, '0'); // Get local date with padding
    const month = String(time.getMonth() + 1).padStart(2, '0'); // Get local month with padding
    const year = time.getFullYear(); // Get local year
    const returntime = {
        hour: hour % 12,
        padded_hour: hour,
        num_hour: num_hour % 12,
        num_min: num_min,
        min,
        sec,
        indicator,
        day,
        padded_day: day,
        month,
        padded_month: month,
        year
    };
    return returntime;
};


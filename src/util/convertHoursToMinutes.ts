export default function convertHoursToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinurtes = (hour * 60) + minutes;
    return timeInMinurtes;
}
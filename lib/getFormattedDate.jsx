export default function getFormattedDate(dateString){
    return new Intl.DateTimeFormat('en-us', {dateStyle: 'long'}).format(new Date(dateString))
}
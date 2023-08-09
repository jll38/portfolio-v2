import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} className='text-gray-300'>{format(date, 'LLLL d, yyyy')}</time>
}
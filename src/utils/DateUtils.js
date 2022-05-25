import { format } from 'date-fns'

const formatDate = (timeLong) => {
  if (!timeLong) return
  const date = new Date(timeLong * 1000)
  return format(date, 'hh:mm:ss aa dd/MM/yyyy')
}

export default formatDate


const useDate = () => {

  const getLocalDate = (date: Date) => {
    console.log('date', date)
    const year = new Date(date).getFullYear()
    const monthNum = new Date(date).getMonth() + 1
    const dayNum = new Date(date).getDate()
    const month = monthNum < 10 ? `0${monthNum}` : monthNum
    const day = dayNum < 10 ? `0${dayNum}` : dayNum
    const result = `${day}.${month}.${year}`
    return result
  }

  return {
    getLocalDate
  }
}

export default useDate
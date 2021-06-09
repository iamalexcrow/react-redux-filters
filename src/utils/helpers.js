export const getUniqueValues = (data, type) => {
    let unique = data.map((item)=> item[type])
    return ['Показать все', ...new Set(unique)]
}

export const paginate = (items) => {
    const itemsPerPage = 20;
    const pages = Math.ceil(items.length / itemsPerPage);

    const newData = Array.from({length:pages}, (_,index)=> {
        const start = index * itemsPerPage
        return items.slice(start, start + itemsPerPage)
    })
    return newData;
}
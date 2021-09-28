const Form = {   
    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },
    resetDoom(){
        document.getElementById("doom--descriptionInput").value = ''
        document.getElementById("doom--moneyValue").value = 0.00
        document.getElementById("doom--date").value = 0
    },
    getValues(){
        this.description = document.getElementById("doom--descriptionInput").value
        this.moneyValue = String(document.getElementById("doom--moneyValue").value)
        // console.log(document.getElementById("doom--moneyValue").value)
        this.date = document.getElementById("doom--date").value
        this.date = Form.formatDate(this.date)
        //console.log([this.description, this.moneyValue, this.date])
        return [this.description, this.moneyValue, this.date]
    }
}


export default Form

function openModal(book){
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2")
    var txt3 = document.getElementById("txt3")
    switch (book) {
        case "Book1":
            txt1.innerHTML = "O poder do hábito"
            txt2.innerHTML = "Charles Duhigg"
            txt3.innerHTML = "R$ 650,00"
            break
        case "Book2":
            txt1.innerHTML = "A arte de pensar claramente"
            txt2.innerHTML = "Rolf Dobeli"
            txt3.innerHTML = "R$ 550,00"
            break
        case "Book3":
            txt1.innerHTML = "Pai rico pai pobre"
            txt2.innerHTML = "Robert Kiyosaki"
            txt3.innerHTML = "R$ 450,00"
            break
        case "Book4":
            txt1.innerHTML = "Senhor dos Anéis"
            txt2.innerHTML = "Tolkien"
            txt3.innerHTML = "R$ 350,00"
            break
        case "Book5":
            txt1.innerHTML = "O poderoso chefão"
            txt2.innerHTML = "Mario Puzo"
            txt3.innerHTML = "R$ 250,00"
            break
        case "Book6":
            txt1.innerHTML = "O vendedor de sonhos"
            txt2.innerHTML = "Auguto Cury"
            txt3.innerHTML = "R$ 150,00"
            break
        default:
            txt1.innerHTML = "O vendedor de sonhos"
            txt2.innerHTML = "Augusto Cury"
            txt3.innerHTML = "R$ 150,00"
        }
        document.getElementById("KnowMore").style.display = "block";
    }

    function closeModal() {
        document.getElementById("KnowMore").style.display = 'none';
    }
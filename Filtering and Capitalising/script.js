const books = [
    {
        Name: "Pather Panchali",
        Author: "Bibhutibhushan Bandyopadhyay",
        YOP: 1929
    },
    {
        Name: "Gora",
        Author: "Rabindranath Tagore",
        YOP: 1910
    },
    {
        Name: "Chander Pahar",
        Author: "Bibhutibhushan Bandyopadhyay",
        YOP: 1937
    },
    {
        Name: "Aranyak",
        Author: "Bibhutibhushan Bandyopadhyay",
        YOP: 1939
    },
    {
        Name: "Chokher Bali",
        Author: "Rabindranath Tagore",
        YOP: 1903
    },
    {
        Name: "Kalbela",
        Author: "Samaresh Majumdar",
        YOP: 1981
    },
    {
        Name: "Prothom Protishruti",
        Author: "Ashapurna Devi",
        YOP: 1964
    },
    {
        Name: "Sei Somoy",
        Author: "Sunil Gangopadhyay",
        YOP: 1989
    },
    {
        Name: "Rajkahini",
        Author: "Abanindranath Tagore",
        YOP: 1909
    },
    {
        Name: "Hajar Churashir Maa",
        Author: "Mahasweta Devi",
        YOP: 1974
    },
    {
        Name: "Kolkatar Jongole",
        Author: "Shirshendu Mukhopadhyay",
        YOP: 2012
    },
    {
        Name: "Bhumi",
        Author: "Manik Bandopadhyay",
        YOP: 2013
    },
    {
        Name: "Chandralekha",
        Author: "Debarati Mukhopadhyay",
        YOP: 2014
    },
    {
        Name: "Dwitiya Basanta",
        Author: "Suchitra Bhattacharya",
        YOP: 2015
    },
    {
        Name: "Swapner Bazar",
        Author: "Samaresh Majumdar",
        YOP: 2018
    }
];

const oldBooks = books
    .filter(book=>book.YOP<2010)
    .map(book=>{
        return{
            Name:book.Name,
            Author:book.Author.toUpperCase(),
            YOP:book.YOP

        };
    });

    console.log(oldBooks);
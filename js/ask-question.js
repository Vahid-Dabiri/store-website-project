import {
    $, _id, _class, scrollPageToTop, goHomeLinkCreator
} from "./global-properties.js"

goHomeLinkCreator();
scrollPageToTop();

let departmentArrey = [
    'Sell department',
    'Delivery department',
    'Answering  department',
    'Buy department',
    'Contact department',
    'Information department'
]

let departments = _id("departments");

departmentArrey.forEach(element => {
    departments.insertAdjacentHTML("beforeEnd" , `
    <option value="${element}">${element}</option>
    `)
});

let QAArrey = [
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Incidunt, omnis?
        `,
        answer: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde sapiente inventore eum autem enim deserunt magnam cumque neque,
        assumenda quaerat, ex a alias ducimus, est in facere esse laudantium nulla! Quo doloremque
        recusandae,distinctio rem error vel? Possimus perferendis nesciunt nam
        voluptatem magnam exercitationem tenetur quaerat accusantium autem ipsum.
        `
    },
    {
        question: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloribus voluptates enim voluptas magnam, optio necessitatibus?
        `,
        answer: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Alias consequatur officiis soluta assumenda voluptatibus labore!
        Aliquam quas fugit quam numquam provident aliquid libero, impedit
        excepturi fuga sunt quaerat natus distinctio non maxime voluptas expedita! Ad delectus,
        facilis ab fugiat velit perspiciatis, veniam fugit ullam expedita rerum dolorum tenetur
        saepe asperiores enim eos molestias. Nulla voluptatem consectetur, blanditiis ex qui illo
        laborum voluptate ad consequatur quibusdam nihil ducimus tenetur inventore excepturi corporis
        nam accusantium eaque, ullam at doloribus aliquam doloremque error. Veniam, aliquam odit omnis
        nisi itaque adipisci dolore odio aperiam, perspiciatis,
        asperiores nulla rerum unde magni at repellendus iusto doloremque?
        `
    }
]

let mostAsked = _id("most-asked");

QAArrey.forEach(element => {
    mostAsked.insertAdjacentHTML('beforeEnd' , `
    <div class="q-a-container">
                    <h3 class="question">${element.question}</h3>
                    <p class="answer">${element.answer}</p>
                </div>
    `)
});
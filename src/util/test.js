const data = [
    {   
        "id": 1,
        "text": "Q1. Are you a TAX payer aborad India?",
        "options": [
            {
                "id": 1,
                "text": "yes"
            },
            {
                "id": 2,
                "text": "no"
            }
        ]
    },
    {
        "id": 2,
        "text": "Q2. Are you a TAX payer aborad India?",
        "options": [
            {
                "id": 1,
                "text": "yes"
            },
            {
                "id": 2,
                "text": "no"
            }
        ]
    },
    {
        "id": 3,
        "text": "Q3. Are you a TAX payer aborad India?",
        "options": [
            {
                "id": 1,
                "text": "yes"
            },
            {
                "id": 2,
                "text": "no"
            }
        ]
    }
    
]

const newArray = data.map(question => 
    question.text
);

console.log(newArray)

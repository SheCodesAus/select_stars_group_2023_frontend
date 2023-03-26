export const mentorPOSTBody = {
    "first_name": "Sarah",
    "last_name": "H",
    "email": "sarah@rocks.com",
    "bio": "Awesome software Engineer Lead",
    "image": "https://tinyurl.com/yfc5rcu3",
    "skills": "Django, Python, React, Html, Css",
    "level": "Lead",
    "interview": true,
    "offer": true,
    "contract_sent": true,
    "contract_return": true

}

export const mentorPOSTResponse = [
    {
        "id": 1,
        "first_name": "Sarah",
        "last_name": "H",
        "email": "sarah@rocks.com",
        "bio": "Awesome software Engineer Lead",
        "image": "https://tinyurl.com/yfc5rcu3",
        "skills": "Django, Python, React, Html, Css",
        "level": "Lead",
        "interview": true,
        "offer": true,
        "contract_sent": true,
        "contract_return": true,
        "onboarding_completed": false,
        "feedback_sent": false,
        "offboarding": false,
        "events": []
    }
]
// PUT request can include any post request key values

export const eventPOSTBody = {
    "image": "https://shecodes.com.au/wp-content/uploads/2020/02/Purple_no_circle.svg",
    "event_type": "Flash",
    "location": "Sydney",
    "description": "Come and discover how to apply HTML, CSS and Django and Python in one day with She Codes",
    "start_date": "2023-04-23 9:00",
    "end_date": "2023-04-25 19:00"
}

export const eventPOSTResponse = {
    "id": 2,
    "image": "https://shecodes.com.au/wp-content/uploads/2020/02/Purple_no_circle.svg",
    "event_type": "Flash",
    "location": "Sydney",
    "description": "Come and discover how to apply HTML, CSS and Django and Python in one day with She Codes",
    "start_date": "2023-04-23 09:00",
    "end_date": "2023-04-25 19:00",
    "status": true
}
//PUT request can include any post request key values
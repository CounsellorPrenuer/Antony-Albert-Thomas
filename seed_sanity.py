import os
import requests
import json

PROJECT_ID = "7ms99gfl"
DATASET = "production"
TOKEN = "skVUCHxLCuJW6ajqb2mJztBn67sc0XDorzwBPEg0XOekOA0y18LyZrfz83SMbLgDqquuLqMQ04GaWdExvzyv0k9swC9Xz7HpHZMcJIHwr25yMBPaEtkRN4iqPVPlXF72te0oSC33O8MYZH83U8xjz4dR1hZe3amWLEUrK0UeUJmEyqOVuwfY"

headers = {
    "Authorization": f"Bearer {TOKEN}"
}

def upload_image(filepath):
    filename = os.path.basename(filepath)
    ext = filepath.split('.')[-1]
    content_type = f"image/{ext}"
    
    with open(filepath, 'rb') as f:
        print(f"Uploading {filepath}...")
        res = requests.post(
            f"https://{PROJECT_ID}.api.sanity.io/v2024-01-01/assets/images/{DATASET}?filename={filename}",
            headers={**headers, "Content-Type": content_type},
            data=f
        )
        if res.status_code == 200:
            print("Uploaded successfully!")
            return res.json()['document']['_id']
        else:
            print("Failed to upload:", res.text)
            return None

founder_id = upload_image("founder.png")
logo_id = upload_image("logo.png")

def create_doc(doc):
    res = requests.post(
        f"https://{PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/{DATASET}",
        headers={**headers, "Content-Type": "application/json"},
        json={"mutations": [{"createOrReplace": doc}]}
    )
    print("Created:", doc.get("_id"), res.text)

# Site Settings
create_doc({
    "_id": "siteSettings",
    "_type": "siteSettings",
    "brandName": "Blueprint Advisors",
    "email": "thomas2020vision@gmail.com",
    "phone": "9159005588",
    "description": "Welcome to Blueprint Advisors. As strategic Career Architects, we transform career uncertainty into intentional, measurable success. In today's dynamic professional landscape, a traditional path is often insufficient. We specialize in providing counselling to develop robust, custom-designed career blueprints that align your core strengths, market opportunities, and long-term vision. We don't just offer advice; we help you to explore the methodology and structure required to build a resilient, fulfilling, and high-impact professional future. If you are ready to move beyond wishing to planning, our expertise is your essential foundation."
})

# Home Page
create_doc({
    "_id": "homePage",
    "_type": "homePage",
    "heroTitle": "Transform Career Uncertainty Into Intentional Success",
    "heroSubtitle": "Strategic Career Architects",
    "heroDescription": "We don't just offer advice; we help you to explore the methodology and structure required to build a resilient, fulfilling, and high-impact professional future. If you are ready to move beyond wishing to planning, our expertise is your essential foundation.",
    "aboutTitle": "About Blueprint Advisors",
    "aboutText": "Welcome to Blueprint Advisors. As strategic Career Architects, we transform career uncertainty into intentional, measurable success. In today's dynamic professional landscape, a traditional path is often insufficient. We specialize in providing counselling to develop robust, custom-designed career blueprints that align your core strengths, market opportunities, and long-term vision.",
    "heroImage": {
        "_type": "image",
        "asset": {
            "_type": "reference",
            "_ref": founder_id
        }
    } if founder_id else None
})

# Packages
packages = [
    {
        "_type": "package",
        "title": "Mentoria Standard (8-9 Students)",
        "price": "₹ 5,500",
        "target": "8-9 STUDENTS",
        "planName": "Discover",
        "features": [
            "Psychometric assessment to measure your interests",
            "1 career counselling session with Mentoria's expert career coaches",
            "Lifetime access to Knowledge Gateway",
            "Invites to live webinars by industry experts"
        ]
    },
    {
        "_type": "package",
        "title": "Mentoria Premium (8-9 Students)",
        "price": "₹ 15,000",
        "target": "8-9 STUDENTS",
        "planName": "Discover plus+",
        "features": [
            "Psychometric assessments to measure your interests, personality and abilities",
            "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation",
            "Lifetime access to Knowledge Gateway",
            "Invites to live webinars by industry experts",
            "Customised reports after each session with education pathways",
            "Guidance on studying abroad",
            "CV building during internships/graduation"
        ]
    },
    {
        "_type": "package",
        "title": "Mentoria Standard (10-12 Students)",
        "price": "₹ 5,999",
        "target": "10-12 STUDENTS",
        "planName": "Achieve Online",
        "features": [
            "Psychometric assessment to measure your interests, personality and abilities",
            "1 career counselling session",
            "Lifetime access to Knowledge Gateway",
            "Pre-recorded webinars by industry experts"
        ]
    },
    {
        "_type": "package",
        "title": "Mentoria Premium (10-12 Students)",
        "price": "₹ 10,599",
        "target": "10-12 STUDENTS",
        "planName": "Achieve Plus+",
        "features": [
            "Psychometric assessment to measure your interests, personality and abilities",
            "4 career counselling sessions",
            "Lifetime access to Knowledge Gateway",
            "Attend live webinars by industry experts",
            "Customised reports after each session with education pathways",
            "Guidance on studying abroad",
            "CV reviews during internships/graduation"
        ]
    },
    {
        "_type": "package",
        "title": "Mentoria Standard (College Graduates)",
        "price": "₹ 6,499",
        "target": "COLLEGE GRADUATES",
        "planName": "Ascend Online",
        "features": [
            "Psychometric assessment to measure your interests, personality and abilities",
            "1 career counselling session",
            "Lifetime access to Knowledge Gateway",
            "Pre-recorded webinars by industry experts"
        ]
    },
    {
        "_type": "package",
        "title": "Mentoria Premium (College Graduates)",
        "price": "₹ 10,599",
        "target": "COLLEGE GRADUATES",
        "planName": "Ascend Plus+",
        "features": [
            "Psychometric assessment to measure your interests, personality and abilities",
            "3 career counselling sessions",
            "Lifetime access to Knowledge Gateway",
            "Attend live webinars by industry experts",
            "Customised reports after each session with information on certificate/online courses",
            "Guidance on studying abroad",
            "CV reviews for job application"
        ]
    }
]

for p in packages:
    import uuid
    p["_id"] = f"package-{uuid.uuid4()}"
    create_doc(p)

print("Done")

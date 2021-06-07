CREATE TABLE students (
    regNO INTEGER,
    name VARCHAR(30), 
    contact_number VARCHAR(20),
    faculty VARCHAR(20),
    hostel INTEGER,
    room_no INTEGER,
    password VARCHAR(30),
    PRIMARY KEY (regNO)
);

CREATE TABLE societies (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    society_one VARCHAR(30),
    society_two VARCHAR(30),
    society_three VARCHAR(30),
    society_four VARCHAR(30),
    FOREIGN KEY (student_id) REFERENCES students(regNO)
);

CREATE TABLE forms (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    strength text, 
    weakness text,
    know_pt_wish text,
    part_of_community text,
    productive_initiatives text,
    fund_raising_idea text,
    FOREIGN KEY (student_id) REFERENCES students(regNO)
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    photoshop VARCHAR(15),
    web_dev VARCHAR(15),
    video_editing VARCHAR(15),
    content_writing VARCHAR(15),
    communication_skills VARCHAR(15),
    persuasion_skills VARCHAR(15),
    teamwork VARCHAR(15), 
    event_management_skills VARCHAR(15),
    leadership_skills VARCHAR(15),
    FOREIGN KEY (student_id) REFERENCES students(regNO)
);
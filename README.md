# React-Jobly

Protecting Routes base on the backend

## admin only

POST companies/new
PATCH companies/:handle/editedit
DELETE companies/:handle/editedit

POST jobs/new
PATCH jobs/:id/editedit
DELETE jobs/:id/editedit

GET users

## same-user or admin

POST users/new
PATCH users/:username/edit
DELETE users/:username/edit
POST users//:username/jobs

## all other routes are free for all

current users you can use
testuser password
testadmin password

### Note

I try to add a button to apply for a job at the company detail page. But it looks ugly so I took it out.

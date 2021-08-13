---
name: User Story
about: A default user story
title: "(Short Name)"
projects: 'me-jterhorst/neueFische-capstone-inCased'
assignees: "me-jterhorst"
labels: tracking issue, needs triage
name: Auto Assign to Project(s)

on:
  issues:
    types: [opened, labeled]
  pull_request_target:
    types: [opened, labeled]
env:
  MY_GITHUB_TOKEN: ${{ secrets.MY_GITHUB_TOKEN }}

jobs:
  assign_one_project:
    runs-on: ubuntu-latest
    name: Assign to One Project
    steps:
    - name: Assign NEW issues and NEW pull requests to project 2
      uses: srggrs/assign-one-project-github-action@1.2.1
      if: github.event.action == 'opened'
      with:
        project: 'https://github.com/me-jterhorst/neueFische-capstone-inCased/projects/1'

---

## Value statement - a requirement, not a solution

As a **(role)**
I need **(an action)**
so that **(a benefit)**

## Description (Text, Scribble, Wireframe, Design)

## Acceptance criteria

- [ ] (functional descriptions)

## Tasks

- [ ] (todos for the team)

## Size

(small, medium, large)

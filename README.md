# Nutrika
## Description
a restful website visualizing Taiwan FDA food nutrition fact of items you select

## What we use
1. Frontend:
  * React: app architecture
  * Redux: state container
  * Redux-Thunk
  * Redux-Saga
  * d3, [recharts](https://github.com/recharts/recharts): visualize the data
1. Backend:
  * Django, Django REST framework: backend api
  * Python: crawler

## Feature
1. select(pin) the items and see their nutrition facts
1. fill the target-form(calories, fat, protein and carbs) and get the comparison between target and select items

## Others
We use redux-thunk and redux-saga to implement redux async actions. To avoiding over-frequently request to server, we use redux-saga to set timeout when you type the search keyword.

## Todos
1. form to add items
1. algorithm to filter unreliable information
1. add items by photo(maybe...)

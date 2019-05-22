import { NoteDto, RecipeDto } from './api/service';

export const RECIPES: RecipeDto[] = [
  {
    "id": "5ce2c33316bb621a382cfe60",
    "title": "Супер блюдо",
    "category": "Dinner",
    "link": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "created": new Date("2019-05-20T18:09:39.435"),
    "description": "описание обеда",
    "tags": [
      {
        "id": "5ce2bce616bb621bfcf973a5",
        "value": "хавка"
      }
    ],
    "image": {
      "id": "5ce2c33316bb621a382cfe5c",
      "link": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "originalName": "Картинка обеда.jpg"
    },
    "steps": [
      {
        "id": "5ce2c33316bb621a382cfe5a",
        "title": "разделка мяса",
        "stepNumber": 0,
        "description": "все нарезать мелкими кубиками",
        "image": {
          "id": "5ce2c33316bb621a382cfe5d",
          "link": null,
          "originalName": "мяско.jpg"
        }
      },
      {
        "id": "5ce2c33316bb621a382cfe5b",
        "title": "тушим",
        "stepNumber": 1,
        "description": "Тушим 40 минут",
        "image": {
          "id": "5ce2c33316bb621a382cfe5e",
          "link": null,
          "originalName": "готовое мяско.jpg"
        }
      }
    ],
    "ingredients": [
      {
        "id": "5ce2c33316bb621a382cfe59",
        "name": "meal",
        "value": 2,
        "unit": "кг"
      }
    ]
  },
  {
    "id": "5ce2c76416bb622340282b76",
    "title": "Супер блюдо",
    "category": "Dinner",
    "link": null,
    "created": new Date("2019-05-20T18:27:32.552"),
    "description": "описание обеда",
    "tags": [
      {
        "id": "5ce2bce616bb621bfcf973a9",
        "value": "вкусняха"
      }
    ],
    "image": {
      "id": "5ce2c76416bb622340282b73",
      "link": null,
      "originalName": "Картинка обеда.jpg"
    },
    "steps": [
      {
        "id": "5ce2c76416bb622340282b71",
        "title": "разделка мяса",
        "stepNumber": 0,
        "description": "все нарезать мелкими кубиками",
        "image": {
          "id": "5ce2c76416bb622340282b74",
          "link": null,
          "originalName": "мяско.jpg"
        }
      },
      {
        "id": "5ce2c76416bb622340282b72",
        "title": "тушим",
        "stepNumber": 1,
        "description": "Тушим 40 минут",
        "image": {
          "id": "5ce2c76416bb622340282b75",
          "link": null,
          "originalName": "готовое мяско.jpg"
        }
      }
    ],
    "ingredients": [
      {
        "id": "5ce2c76416bb622340282b70",
        "name": "meal",
        "value": 2,
        "unit": "кг"
      }
    ]
  }
];
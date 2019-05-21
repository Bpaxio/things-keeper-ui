import { NoteDto } from './api/service';

export const NOTES: NoteDto[] = [
    {
        "id": "5ce2c33316bb621a382cfe60",
        "title": "Супер заметка",
        "created": new Date("2019-05-20T18:09:39.435"),
        "description": "описание заметки",
        "tags": [
          {
            "id": "5ce2bce616bb621bfcf973a5",
            "value": "хавка"
          }
        ]
      },
      {
        "id": "5ce2c76416bb622340282b76",
        "title": "Супер Note",
        "created": new Date("2019-05-20T18:27:32.552"),
        "description": "описание Note",
        "tags": [
          {
            "id": "5ce2bce616bb621bfcf973a9",
            "value": "вкусняха"
          }
        ]
      }
]
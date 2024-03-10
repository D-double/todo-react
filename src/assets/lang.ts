interface ILangElem {
    ru: string;
    uz: string;
}
export interface ILang {
    appbartitle: ILangElem;
    appbarseacrch: ILangElem;
    infobar: ILangElem;
    noinfobar: ILangElem;
    list: ILangElem;
    grid: ILangElem;
    titlewindow: ILangElem;
    titlewindowedit: ILangElem;
    editbtn: ILangElem;
    deledit: ILangElem;
    closebtn: ILangElem;
    addbtn: ILangElem;
    editwindowbtn: ILangElem;
}
const lang: ILang = {
    appbartitle: {
        ru: 'Заметки',
        uz: 'Eslatmalar'
    },
    appbarseacrch: {
        ru: 'Поиск...',
        uz: 'Qidirish...'
    },
    infobar: {
        ru: 'Все заметки',
        uz: 'Barcha eslatmalar'
    },
    noinfobar: {
        ru: 'Нет заметок',
        uz: 'Еslatmalar yoq'
    },
    list: {
        ru: 'Список',
        uz: 'Roʻyxat'
    },
    grid: {
        ru: 'Сетка',
        uz: 'Setka'
    },
    titlewindow: {
        ru: 'Добавить заметку',
        uz: 'Eslatma qo’shish'
    },
    titlewindowedit: {
        ru: 'Изменить заметку',
        uz: 'Elsatmani tahrirlash'
    },
    editbtn: {
        ru: 'РЕДАКТИРОВАТЬ',
        uz: 'O`ZGARTIRISH'
    },
    deledit: {
        ru: 'Удалить',
        uz: "o'chirish"
    },
    closebtn: {
        ru: 'Отмена',
        uz: "Bekor qilish"
    },
    addbtn: {
        ru: 'Добавить',
        uz: "Qo’shish"
    },
    editwindowbtn: {
        ru: 'изменить',
        uz: "o'zgartirish"
    },
}
export default lang
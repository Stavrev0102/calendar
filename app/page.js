"use client";
import styles from "./page.module.css";
import Calendar from ".";

export default function Home() {
  let sampleData = [
    //11:00
    {
      id: 1,
      name: "Present simple vs Present continuous (Discussing grammar)",
      time: "11:00",
      day: "Понеделник",
      info: {
        duration: "11:00-12:00",
        teacher: "Koce",
        teacherImg:
          "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A1-1","A2-1"],
        level: "Начинаещ",
      },
      moreInfo : "При изучаването на английски език първите две глаголни времена, с които учениците се запознават, са Present Simple Tense (Сегашно Просто Време) и Present Progressive (Continuous) Tense (Сегашно Продължително Време). В курса на kabinata.com те се изучават в нивото, в което аз преподавам – Fast Start 2. Когато ги разглеждаме по отделно и правим упражненията към съответния урок, курсистите ми нямат никакви проблеми и бързо се справят с поставените им задачи. В момента обаче, в който трябва сами да решат кое от двете глаголни времена да използват и как да формулират изреченията си, те често се обърктат и в повечето случаи сливат двете времена. Затова прилагам едно примерно сравнение на двете глагални времена, с което да е по-лесно да се разграничават и да се използват правилно.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 2,
      name: "Grammar & Speaking",
      time: "11:00",
      day: "Вторник",
      info: {
        duration: "11:00-12:00",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A1-2","A2-1"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява правилното говоренето и произношението на думите.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 3,
      name: "Reading & Speaking",
      time: "11:00",
      day: "Сряда",
      info: {
        duration: "11:00-12:00",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A2-2","B1-1"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 4,
      name: "Reading & Speaking",
      time: "11:00",
      day: "Четвъртък",
      info: {
        duration: "11:00-12:00",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A2-2","B1-1"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 5,
      name: "Практически урок",
      time: "11:00",
      day: "Събота",
      info: {
        duration: "11:00-12:00",
        teacher: "Lilia",
        teacherImg:
        "https://clipart-library.com/newhp/278-2789483_education-school-image-transparent-teacher-cute-teacher-girl.png",
          course: ["A1-2","A2-1"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: 'I have been a teacher for many years now and I still say to all of my students - Learning a new language is like living your life, you have good and bad days. Focus on the good experiences and soon you will forget the bad ones. Don’t give up if you don’t get things right the first time around. It’s better to make mistakes trying than not to try at all. I have a lot of experience as a translator for the state administration. I think I can help you with Spoken English and grammar with conversations on various topics and grammar exercises.'
    },
    {
      id: 6,
      name: "Grammar & exercises",
      time: "11:00",
      day: "Неделя",
      info: {
        duration: "11:00-12:00",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A1-1","A1-2"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },

    //12:00
    {
      id: 7,
      name: "Speaking",
      time: "12:00",
      day: "Понеделник",
      info: {
        duration: "12:30-13:30",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A2-2","B1-1"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 8,
      name: "Advanced English",
      time: "12:00",
      day: "Вторник",
      info: {
        duration: "12:30-13:30",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["B1-2","B2"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 9,
      name: "Speaking",
      time: "12:00",
      day: "Сряда",
      info: {
        duration: "12:30-13:30",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A1-1","A1-2"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 10,
      name: "Speaking",
      time: "12:00",
      day: "Четвъртък",
      info: {
        duration: "12:30-13:30",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A1-1","A1-2"],
        level: "Начинаеш",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    {
      id: 11,
      name: "Dialogues & Conversation",
      time: "12:00",
      day: "Неделя",
      info: {
        duration: "12:30-13:30",
        teacher: "Koce",
        teacherImg:
        "https://static.vecteezy.com/system/resources/previews/028/241/879/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png",
          course: ["A2-2","B1-1"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo: "It is important to like what you do and there is no exception with learning languages, if you like it, you will advance. Learn with us! We’ll make you like it."
    },
    //13:00
    {
      id: 12,
      name: "Speaking",
      time: "13:00",
      day: "Вторник",
      info: {
        duration: "13:30-14:30",
        teacher: "Lara",
        teacherImg:
        "https://www.shutterstock.com/image-vector/woman-professor-without-face-teaching-260nw-456697969.jpg",
          course: ["A1-1","A1-2","A2-1"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo:'A good conversation is like food for the soul. When you reach the point in a second language where you can express your opinions, feelings and motivations with the confidence that they are understood and interpreted in the way you intended, satisfaction is guaranteed!'
    },
    {
      id: 13,
      name: "Speaking",
      time: "13:00",
      day: "Четвъртък",
      info: {
        duration: "13:30-14:30",
        teacher: "Lara",
        teacherImg:
        "https://www.shutterstock.com/image-vector/woman-professor-without-face-teaching-260nw-456697969.jpg",
          course: ["A2-2","B1-1","B1-2","B2"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo:'A good conversation is like food for the soul. When you reach the point in a second language where you can express your opinions, feelings and motivations with the confidence that they are understood and interpreted in the way you intended, satisfaction is guaranteed!'

    },
    {
      id: 14,
      name: "Speaking class",
      time: "13:00",
      day: "Събота",
      info: {
        duration: "13:30-14:30",
        teacher: "Lora",
        teacherImg:
        "https://t4.ftcdn.net/jpg/01/06/46/47/360_F_106464758_LhP22ccaJ1ujMDhGlX7BD54SVyZxrd52.jpg",
          course: ["A1-2","A2-1"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo:'Учител по английски и немски език Педагогически стаж - 22 г. Завършила: ЮЗУ "Неофит Рилски" - гр. Благоевград Специалност: Приложна лингвистика Магистър  Квалификационна степен: IV ПКС'

    },
    {
      id: 16,
      name: "Speaking class",
      time: "14:00",
      day: "Понеделник",
      info: {
        duration: "13:30-14:30",
        teacher: "Lora",
        teacherImg:
        "https://t4.ftcdn.net/jpg/01/06/46/47/360_F_106464758_LhP22ccaJ1ujMDhGlX7BD54SVyZxrd52.jpg",
          course: ["A1-2","A2-1"],
        level: "Начинаещ",
      },
      moreInfo: "Ще се упражнява четенето и говоренето.",
      teacherInfo:'Учител по английски и немски език Педагогически стаж - 22 г. Завършила: ЮЗУ "Неофит Рилски" - гр. Благоевград Специалност: Приложна лингвистика Магистър  Квалификационна степен: IV ПКС'
    },
    //test no event
    {
      id: 16,
      name: "",
      time: "16:00",
      day: "Сряда",
      info: {
        duration: "11:00-12:00",
        teacher: "Lilia",
        teacherImg:
          "https://clipart-library.com/newhp/278-2789483_education-school-image-transparent-teacher-cute-teacher-girl.png",
          course: ["A2-2","B1-1"],
        level: "Напреднал",
      },
      moreInfo: "Ще се упражнява говоренето и произношението на думите."
    },
    
  ];
  

  return (
    <main className={styles.main}>
      <Calendar data = {sampleData}/>
    </main>
  );
}

<template>
    <section class="calendar">
        <h2>Календарь</h2>
        <div id="calendar">
            <div class="headers">
                <button @click="previousMonth">
                    <Arrow />
                </button>
                <span>{{ getMonthName(month) }}</span>
                <button @click="nextMonth" class="another">
                    <Arrow />
                </button>
            </div>
            <table>
                <tr>
                    <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
                </tr>
                <tr class="another-tr" v-for="row in calendar" :key="row">
                    <td v-for="cell in row" :key="cell.date"
                        :class="{ 'today': cell.isToday, 'selected': isSelected(cell.date) }"
                        @click="selectDate(cell.date)">{{ cell.date }}</td>
                </tr>
            </table>
        </div>
        <div class="calendar-details">
            <div class="calendar-details_head">
                Деталии календаря
                <Plus />
            </div>
            <ul class="calendar-details_list">
                <li v-for="item in details" :key="item.id" class="calendar-details_item">
                    <input type="checkbox" :checked="item.check">
                    {{ item.text }}
                </li>
            </ul>
        </div>
        <MiniAdvertising />
    </section>
</template>
  
<script setup>
import Arrow from "../assets/icons/calendar/Arrow.vue"
import Plus from "../assets/icons/calendar/Plus.vue"
import { ref, onMounted } from 'vue';
import MiniAdvertising from "../components/advertising/MiniAdvertising.vue";

const details = ref([
    {
        id: 0,
        check: true,
        text: "Лекции",
        img: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0656 13.4357H2.15858C1.41245 13.4357 0.807617 12.8149 0.807617 12.0491V1.88139C0.807617 1.11563 1.41245 0.494873 2.15858 0.494873H12.0656C12.8118 0.494873 13.4166 1.11563 13.4166 1.88139V12.0491C13.4166 12.8149 12.8118 13.4357 12.0656 13.4357ZM6.30474 10.6032L11.4834 5.28819C11.6593 5.10772 11.6593 4.81507 11.4834 4.6346L10.8466 3.981C10.6707 3.80052 10.3856 3.80049 10.2097 3.981L5.9863 8.31553L4.01449 6.29183C3.83864 6.11135 3.5535 6.11135 3.37762 6.29183L2.74079 6.94542C2.56494 7.1259 2.56494 7.41854 2.74079 7.59902L5.66787 10.6031C5.84375 10.7837 6.12886 10.7837 6.30474 10.6032Z" fill="#1EA9B9"/>
            </svg>
            `,
    },
    {
        id: 1,
        check: false,
        text: "Практика",
        img: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0656 13.141H2.15858C1.41245 13.141 0.807617 12.5202 0.807617 11.7545V1.58671C0.807617 0.820949 1.41245 0.200195 2.15858 0.200195H12.0656C12.8118 0.200195 13.4166 0.820949 13.4166 1.58671V11.7545C13.4166 12.5202 12.8118 13.141 12.0656 13.141ZM6.30474 10.3085L11.4834 4.99352C11.6593 4.81304 11.6593 4.5204 11.4834 4.33992L10.8466 3.68632C10.6707 3.50584 10.3856 3.50582 10.2097 3.68632L5.9863 8.02085L4.01449 5.99715C3.83864 5.81667 3.5535 5.81667 3.37762 5.99715L2.74079 6.65075C2.56494 6.83122 2.56494 7.12386 2.74079 7.30434L5.66787 10.3085C5.84375 10.489 6.12886 10.489 6.30474 10.3085Z" fill="#1EA9B9"/>
            </svg>
            `,
    },
    {
        id: 2,
        check: false,
        text: "Лекции",
        img: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0656 13.8463H2.15858C1.41245 13.8463 0.807617 13.2256 0.807617 12.4598V2.29203C0.807617 1.52627 1.41245 0.905518 2.15858 0.905518H12.0656C12.8118 0.905518 13.4166 1.52627 13.4166 2.29203V12.4598C13.4166 13.2256 12.8118 13.8463 12.0656 13.8463ZM6.30474 11.0138L11.4834 5.69884C11.6593 5.51836 11.6593 5.22572 11.4834 5.04524L10.8466 4.39164C10.6707 4.21117 10.3856 4.21114 10.2097 4.39164L5.9863 8.72617L4.01449 6.70247C3.83864 6.52199 3.5535 6.52199 3.37762 6.70247L2.74079 7.35607C2.56494 7.53655 2.56494 7.82919 2.74079 8.00966L5.66787 11.0138C5.84375 11.1943 6.12886 11.1943 6.30474 11.0138Z" fill="#FD9E30"/>
            </svg>
            `,
    },
    {
        id: 3,
        check: false,
        text: "Лекции",
        img: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0656 13.5516H2.15858C1.41245 13.5516 0.807617 12.9309 0.807617 12.1651V1.99735C0.807617 1.23159 1.41245 0.61084 2.15858 0.61084H12.0656C12.8118 0.61084 13.4166 1.23159 13.4166 1.99735V12.1651C13.4166 12.9309 12.8118 13.5516 12.0656 13.5516ZM6.30474 10.7191L11.4834 5.40416C11.6593 5.22368 11.6593 4.93104 11.4834 4.75056L10.8466 4.09697C10.6707 3.91649 10.3856 3.91646 10.2097 4.09697L5.9863 8.4315L4.01449 6.40779C3.83864 6.22732 3.5535 6.22732 3.37762 6.40779L2.74079 7.06139C2.56494 7.24187 2.56494 7.53451 2.74079 7.71499L5.66787 10.7191C5.84375 10.8996 6.12886 10.8996 6.30474 10.7191Z" fill="#FD3055"/>
            </svg>
            `,
    },
    {
        id: 4,
        check: false,
        text: "Лекции",
        img: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0656 13.2567H2.15858C1.41245 13.2567 0.807617 12.636 0.807617 11.8702V1.70243C0.807617 0.936671 1.41245 0.315918 2.15858 0.315918H12.0656C12.8118 0.315918 13.4166 0.936671 13.4166 1.70243V11.8702C13.4166 12.636 12.8118 13.2567 12.0656 13.2567ZM6.30474 10.4242L11.4834 5.10924C11.6593 4.92876 11.6593 4.63612 11.4834 4.45564L10.8466 3.80205C10.6707 3.62157 10.3856 3.62154 10.2097 3.80205L5.9863 8.13657L4.01449 6.11287C3.83864 5.93239 3.5535 5.93239 3.37762 6.11287L2.74079 6.76647C2.56494 6.94695 2.56494 7.23959 2.74079 7.42006L5.66787 10.4242C5.84375 10.6047 6.12886 10.6047 6.30474 10.4242Z" fill="#5AEE72"/>
            </svg>
            `,
    },
    {
        id: 5,
        check: false,
        text: "Лекции",
        img: `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0656 12.962H2.15858C1.41245 12.962 0.807617 12.3413 0.807617 11.5755V1.40775C0.807617 0.641994 1.41245 0.0212402 2.15858 0.0212402H12.0656C12.8118 0.0212402 13.4166 0.641994 13.4166 1.40775V11.5755C13.4166 12.3413 12.8118 12.962 12.0656 12.962ZM6.30474 10.1295L11.4834 4.81456C11.6593 4.63408 11.6593 4.34144 11.4834 4.16096L10.8466 3.50737C10.6707 3.32689 10.3856 3.32686 10.2097 3.50737L5.9863 7.8419L4.01449 5.81819C3.83864 5.63772 3.5535 5.63772 3.37762 5.81819L2.74079 6.47179C2.56494 6.65227 2.56494 6.94491 2.74079 7.12539L5.66787 10.1295C5.84375 10.31 6.12886 10.31 6.30474 10.1295Z" fill="#3EF1FD"/>
            </svg>
            `,
    },
])

const currentDate = new Date();
const year = ref(currentDate.getFullYear());
const month = ref(currentDate.getMonth());
const calendar = ref([]);
const daysOfWeek = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'];

onMounted(() => {
    generateCalendar();
});

function generateCalendar() {
    const firstDay = new Date(year.value, month.value, 1);
    const lastDay = new Date(year.value, month.value + 1, 0);
    const startDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1 - firstDay.getDay());
    const endDate = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() + (6 - lastDay.getDay()));
    const totalDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    const calendarData = [];
    let row = [];

    for (let i = 0; i < totalDays; i++) {
        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
        const isCurrentMonth = currentDate.getMonth() === month.value;

        row.push({
            date: isCurrentMonth ? currentDate.getDate() : '',
            isToday: isToday(currentDate),
        });

        if (currentDate.getDay() === 6 || i === totalDays - 1) {
            calendarData.push(row);
            row = [];
        }
    }

    calendar.value = calendarData;
}

function isToday(date) {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

function getMonthName(month) {
    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    return monthNames[month];
}

function previousMonth() {
    if (month.value === 0) {
        year.value--;
        month.value = 11;
    } else {
        month.value--;
    }
    generateCalendar();
}
function nextMonth() {
    if (month.value === 11) {
        year.value++;
        month.value = 0;
    } else {
        month.value++;
    }
    generateCalendar();
}

function selectDate(date) {
    // Действия при выборе определенной даты
    console.log('Выбрана дата:', date);
}

function isSelected(date) {
    const selectedDate = new Date(year.value, month.value, date);
    const today = new Date();
    return (
        selectedDate.getDate() === today.getDate() &&
        selectedDate.getMonth() === today.getMonth() &&
        selectedDate.getFullYear() === today.getFullYear()
    );
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#calendar {
    max-width: 281px;
    font-family: 'Montserrat';
    background: #FFFFFF;
    box-shadow: 0px 0px 0px 0.739474px #E4E4E4;
    border-radius: 5.91579px;
    box-sizing: border-box;
    padding: 8px 7px 13px 13px;
}


.headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headers button {
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    text-align: center;
}

th {
    background: #FFFFFF;
    border-radius: 3.69737px;
    font-weight: 500;
    font-size: 11.8316px;
    color: #7A7A7A;

}

td {
    padding: 10px 11px 10px 12px;
    background: #FFFFFF;
    border-radius: 3.69737px;
    font-weight: 500;
    font-size: 10.13421px;
    color: #000000;
}

.today {
    background-color: #ff0000;
    color: #fff;
}

.selected {
    background: #1EA9B9;
    color: #fff;
}

span {
    font-weight: 600;
    font-size: 11.8316px;
    color: #000000;
}

h2 {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    padding: 21px 0 13px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    background: #FFFFFF;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    box-shadow: 0px 0px 0px 0.739474px #E4E4E4;
}

.another {
    transform: rotate(180deg);
}

.calendar-details {
    margin-top: 5.61px;
    max-width: 281px;
    font-family: 'Montserrat';
    background: #FFFFFF;
    box-shadow: 0px 0px 0px 0.739474px #E4E4E4;
    border-radius: 5.91579px;
    box-sizing: border-box;
    padding: 11px;

    &_head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        font-size: 11.8316px;
        color: #000000;
    }

    &_list {
        display: flex;
        flex-direction: column;
        gap: 7.76px;
    }

    &_item {
        font-weight: 500;
        font-size: 7.39474px;
        color: #000000;
        display: flex;
        align-items: center;
        gap: 4.45px;
    }

}
</style>
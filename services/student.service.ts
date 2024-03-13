import { APIRequestContext } from "@playwright/test";
import { operations } from "../.temp/types";
type typeForGetFacultiesBody = operations["FacultyControllerV5_get"]["responses"]["200"]["content"]["application/json"];
type typeForGetCoursesBody = operations["CourseControllerV5_get"]["responses"]["200"]["content"]["application/json"];
type typeForGetGroupsBody = operations["GroupControllerV5_get"]["responses"]["200"]["content"]["application/json"];
type typeForGetLessonsBody = operations["StudentCalendarControllerV5_get"]["responses"]["200"]["content"]["application/json"];

class StudentService {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    getListOfFaculties = async () => {
        const response = await this.request.get('https://dut-api.p.lwjerri.dev/v5/faculty');
        const body: typeForGetFacultiesBody = await response.json();
        const status = response.status();

        return { body, status };
    }

    getListOfCourses = async (facultyId: number) => {
        const response = await this.request.get(`https://dut-api.p.lwjerri.dev/v5/course/${facultyId}`);
        const body: typeForGetCoursesBody = await response.json();
        const status = response.status();

        return { body, status };
    }

    getListOfGroups = async (facultyId: number, courseId: number) => {
        const response = await this.request.get(`https://dut-api.p.lwjerri.dev/v5/group/${facultyId}/${courseId}`);
        const body: typeForGetGroupsBody = await response.json();
        const status = response.status();

        return { body, status };
    }

    getListOfLessons = async (facultyId: number, courseId: number, groupId: number, weekType: string) => {
        const response = await this.request.get(`https://dut-api.p.lwjerri.dev/v5/student-calendar/${facultyId}/${courseId}/${groupId}/${weekType}?startDate=08.03.2024&endDate=08.03.2024`);
        const body: typeForGetLessonsBody = await response.json();
        const status = response.status();

        return { body, status };
    }
}
export default StudentService;
import { APIRequestContext } from "@playwright/test";
import { operations } from "../.temp/types";
type typeForGetDepartmentsBody = operations["DepartmentControllerV5_get"]["responses"]["200"]["content"]["application/json"];
type typeForGetTeachersBody = operations["TeacherControllerV5_get"]["responses"]["200"]["content"]["application/json"];
type typeForGetLessonsBody = operations["TeacherCalendarControllerV5_get"]["responses"]["200"]["content"]["application/json"];

class TeacherService {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    getListOfDepartments = async () => {
        const response = await this.request.get('https://dut-api.p.lwjerri.dev/v5/department');
        const body: typeForGetDepartmentsBody = await response.json();
        const status = response.status();

        return { body, status };
    }

    getListOfTeachers = async (departmentId: number) => {
        const response = await this.request.get(`https://dut-api.p.lwjerri.dev/v5/teacher/${departmentId}`);
        const body: typeForGetTeachersBody = await response.json();
        const status = response.status();

        return { body, status };
    }

    getListOfLessons = async (departmentId: number, teacherId: number, weekType: string) => {
        const response = await this.request.get(`https://dut-api.p.lwjerri.dev/v5/teacher-calendar/${departmentId}/${teacherId}/${weekType}`)
        const body: typeForGetLessonsBody = await response.json();
        const status = response.status();

        return { body, status };
    }
}
export default TeacherService;
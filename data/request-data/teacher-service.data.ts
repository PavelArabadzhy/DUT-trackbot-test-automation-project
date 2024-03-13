import { APIRequestContext } from "@playwright/test";
import TeacherService from "../../services/teacher.service";

class PrepareDataForTeacherService {
    private teacherService: TeacherService;
    constructor(request: APIRequestContext) {
        this.teacherService = new TeacherService(request);
    }

    getTeachers = async () => {
        const response = await this.teacherService.getListOfDepartments();
        return response.body.data.map(department => department.id);
    }

    getLessons = async () => {
        const departmentsIds = await this.getTeachers();
        const testData = [];

        await Promise.all(departmentsIds.map(async (departmentId: number) => {
            const response = await this.teacherService.getListOfTeachers(departmentId);
            const teachersIds = response.body.data.map(teacher => teacher.id);

            teachersIds.forEach(teacherId => {
                testData.push({departmentId, teacherId});
            })
        }))
        return testData;
    }

}
export default PrepareDataForTeacherService;
import { APIRequestContext } from "@playwright/test";
import StudentService from "../../services/student.service";

class PrepareDataForStudentService {
    private studentService: StudentService;
    constructor(request: APIRequestContext) {
        this.studentService = new StudentService(request);
    }

    getCourse = async () => {
        const response = await this.studentService.getListOfFaculties();
        return response.body.data.map(faculty => faculty.id);
    }

    getGroup = async () => {
        const facultiesIds = await this.getCourse();
        const testData = [];

        await Promise.all(facultiesIds.map(async (facId: number) => {
            const responseCourses = await this.studentService.getListOfCourses(facId);
            const coursesIds = responseCourses.body.data.map(course => course.id);

            coursesIds.forEach(courseId => {
                testData.push({facId, courseId})
            })
        }))
        return testData;
    }

    getLessons = async () => {
        const facultiesIds = await this.getCourse();
        const testData = [];

        await Promise.all(facultiesIds.map(async (facId: number) => {
            const responseCourses = await this.studentService.getListOfCourses(facId);
            const coursesIds = responseCourses.body.data.map(course => course.id);

            await Promise.all(coursesIds.map(async (courseId: number) => {
                const responseGroups = await this.studentService.getListOfGroups(facId, courseId);
                const groupsIds = responseGroups.body.data.map(group => group.id);

                groupsIds.forEach(groupId => {
                    testData.push({ facId, courseId, groupId });
                });
            }));
        }));
        return testData;
    }
}

export default PrepareDataForStudentService;
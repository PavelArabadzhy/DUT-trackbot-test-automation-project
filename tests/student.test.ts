import {test, expect} from "@playwright/test";
import StudentService from "../services/student.service";
import validateResponseSchema from "../utils/validateSchema";
import expectedSchemaForStudentService from "../data/responses-schemas/student-service.schemas";
import PrepareDataForStudentService from "../data/request-data/student-service.data";

test.describe('Test suite for Student service', () => {
    let studentService: StudentService;
    let prepareDataFor: PrepareDataForStudentService;

    test.beforeEach(async ({ request }) => {
        studentService = new StudentService(request);
        prepareDataFor = new PrepareDataForStudentService(request);
    });

    test('GET list of faculties', async () => {
        //act
        const response = await studentService.getListOfFaculties();

        //assert
        expect.soft(response.status).toBe(200);
        expect.soft(response.body).toBeDefined();
        validateResponseSchema(response.body, expectedSchemaForStudentService.getFaculties);
    });

    test('GET list of courses for each faculty', async () => {
        //arrange
        const facultiesIds = await prepareDataFor.getCourse();

        //act
        await Promise.all(facultiesIds.map(async (facId:number) => {
            const response = await studentService.getListOfCourses(facId);

        //assert
            expect.soft(response.status).toBe(200);
            expect.soft(response.body).toBeDefined();
            validateResponseSchema(response.body, expectedSchemaForStudentService.getCourses);
        }))
    })

    test('GET list of groups for each faculty and course', async () => {
        //arrange
        const testData = await prepareDataFor.getGroup();

        //act
        await Promise.all(testData.map(async ({ facId, courseId }) => {
            const response = await studentService.getListOfGroups(facId, courseId);

        //assert
            expect.soft(response.status).toBe(200);
            expect.soft(response.body).toBeDefined();
            validateResponseSchema(response.body, expectedSchemaForStudentService.getGroups)
        }))
    })

    test('GET list of lessons for each faculty, course and group (CURRENT and NEXT week)', async () => {
        //arrange
        const testData = await prepareDataFor.getLessons();

        //act
        for (const week of ["CURRENT", "NEXT"]) {
            await Promise.all(testData.map(async ({ facId, courseId, groupId }) => {
                const response = await studentService.getListOfLessons(facId, courseId, groupId, week);

        //assert
                expect.soft(response.status).toBe(200);
                expect.soft(response.body).toBeDefined();
                validateResponseSchema(response.body, expectedSchemaForStudentService.getLessons);
            }));
        }
    });
});
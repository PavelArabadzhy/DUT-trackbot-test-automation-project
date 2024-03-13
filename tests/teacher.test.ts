import { test, expect } from "@playwright/test";
import TeacherService from "../services/teacher.service";
import PrepareDataForTeacherService from "../data/request-data/teacher-service.data";
import validateResponseSchema from "../utils/validateSchema";
import expectedSchemaForTeacherService from "../data/responses-schemas/teacher-service.schemas";

test.describe("Test suite for Teacher service", () => {
    let teacherService: TeacherService;
    let prepareDataFor: PrepareDataForTeacherService;

    test.beforeEach(async ({request}) => {
        teacherService = new TeacherService(request);
        prepareDataFor = new PrepareDataForTeacherService(request);
    })

    test('GET list of departments', async () => {
        //act
        const response = await teacherService.getListOfDepartments();

        //assert
        expect.soft(response.status).toBe(200);
        expect.soft(response.body).toBeDefined();
        validateResponseSchema(response.body, expectedSchemaForTeacherService.getDepartments);
    })

    test('GET list of teachers for each departments', async () => {
        //arrange
        const departmentsIds = await prepareDataFor.getTeachers();

        //act
        await Promise.all(departmentsIds.map(async (departmentId: number) => {
            const response = await teacherService.getListOfTeachers(departmentId);

        //assert
            expect.soft(response.status).toBe(200);
            expect.soft(response.body).toBeDefined();
            validateResponseSchema(response.body, expectedSchemaForTeacherService.getTeachers)
        }))
    })

    test('GET list of lessons for each departments and teachers (CURRENT and NEXT week)', async () => {
        //arrange
        const testData = await prepareDataFor.getLessons();

        //act
        for (const week of ["CURRENT", "NEXT"]) {
            await Promise.all(testData.map(async ({departmentId, teacherId}) => {
                const response = await teacherService.getListOfLessons(departmentId, teacherId, week);

        //assert
                expect.soft(response.status).toBe(200);
                expect.soft(response.body).toBeDefined();
                validateResponseSchema(response.body, expectedSchemaForTeacherService.getLessons);
            }))
        }
    })
});
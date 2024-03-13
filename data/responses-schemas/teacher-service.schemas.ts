class expectedSchemaForTeacherService {
    static getDepartments = {
        type: 'object',
        properties: {
            cached: { type: 'boolean' },
            fromDb: { type: 'boolean' },
            hash: { type: 'string' },
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        id: { type: 'number' }
                    },
                    required: ['name', 'id']
                }
            }
        },
        required: ['cached', 'fromDb', 'hash', 'data']
    };

    static getTeachers = {
        type: 'object',
        properties: {
            cached: { type: 'boolean' },
            fromDb: { type: 'boolean' },
            hash: { type: 'string' },
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        id: { type: 'number' }
                    },
                    required: ['name', 'id']
                }
            }
        },
        required: ['cached', 'fromDb', 'hash', 'data']
    };

    static getLessons = {
        type: 'object',
        properties: {
            cached: { type: 'boolean' },
            fromDb: { type: 'boolean' },
            hash: { type: 'string' },
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        lessonShortName: { type: 'string' },
                        lessonLongName: { type: 'string' },
                        lessonType: { type: 'string' },
                        addedAt: { type: 'string' },
                        startAt: { type: 'string' },
                        endAt: { type: 'string' },
                        cabinet: { type: 'string' },
                        groups: { type: 'array' },
                        lessonDate: { type: 'string' },
                        dayNameShort: { type: 'string' },
                        dayNameLong: { type: 'string' },
                        lessonNumber: { type: 'number' },
                        disciplineId: { type: 'number' },
                        updatedAt: { type: 'string' }
                    },
                    required: [
                        'lessonShortName',
                        'lessonLongName',
                        'lessonType',
                        'addedAt',
                        'startAt',
                        'endAt',
                        'cabinet',
                        'groups',
                        'lessonDate',
                        'dayNameShort',
                        'dayNameLong',
                        'lessonNumber',
                        'disciplineId',
                        'updatedAt'
                    ]
                }
            }
        },
        required: ['cached', 'fromDb', 'hash', 'data']
    };
}
export default expectedSchemaForTeacherService;
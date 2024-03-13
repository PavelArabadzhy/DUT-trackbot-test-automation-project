class expectedSchemaForStudentService {

    static getFaculties = {
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

    static getCourses = {
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

    static getGroups = {
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
                        addedAt: { type: ['string', 'null'] },
                        startAt: { type: 'string', pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$' },
                        endAt: { type: 'string', pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$' },
                        cabinet: { type: 'string' },
                        lectorShortName: { type: ['string', 'null'] },
                        lectorFullName: { type: ['string', 'null'] },
                        groupName: { type: 'string' },
                        lessonDate: { type: 'string', pattern: '^[0-3]?[0-9]\\.[01]?[0-9]\\.[0-9]{4}$' },
                        dayNameShort: { type: 'string' },
                        dayNameLong: { type: 'string' },
                        lessonNumber: { type: 'integer' },
                        disciplineId: { type: 'integer' },
                        updatedAt: { type: 'string', pattern: '^[0-3]?[0-9]\\.[01]?[0-9]\\.[0-9]{4}$' }
                    },
                    required: [
                        'lessonShortName',
                        'lessonLongName',
                        'lessonType',
                        'startAt',
                        'endAt',
                        'cabinet',
                        'groupName',
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
export default expectedSchemaForStudentService;

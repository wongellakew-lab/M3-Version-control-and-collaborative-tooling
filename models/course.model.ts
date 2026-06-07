import { Temporal} from "@js-temporal/polyfill";

export interface Course {
    readonly id: string;
    title: string;
    capacity: number;
    startDate?: Temporal.PlainDate;
}


export type CourseStatus = 
    |{
        status: "DRAFT";
        createdBy: string;
        createdAt:Temporal.Instant;
    }
    |{
        status: "PUBLISHED";
        publishedAt: Temporal.Instant;
        syllabus: string;
    }
    |{
        status: "ACTIVE";
        enrolledCount: number;
        startDate: Temporal.PlainDate;
    }
    |{
        status: "ARCHIVED";
        archivedAt: Temporal.Instant;
        finalEnrollmentCount: number;
    }
    |{
        status: "CANCELLED";
        reason: string;
        cancelledAt: Temporal.Instant;
    };

    export function describeCourse(course: CourseStatus): string{
        switch(course.status){
            case "DRAFT":
                return `Draft created by ${course.createdBy} on ${course.createdAt}`;
            case "PUBLISHED":
                return `Published on ${course.publishedAt} with syllabus available`;
            case "ACTIVE":
                return `Active with ${course.enrolledCount} students. Started on ${course.startDate}`;
            case "ARCHIVED":
                return `Archived on ${course.archivedAt} with ${course.finalEnrollmentCount} total students.`;
            case "CANCELLED":
                return `Cancelled: ${course.reason} on ${course.cancelledAt}.`;
            default:{
                const _check:never = course;
                throw new Error(`Unhandled course status: ${JSON.stringify(_check)}`);
            }
            
        }
    }
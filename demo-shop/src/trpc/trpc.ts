import {initTRPC} from '@trpc/server'
import exp from 'constants';

const t = initTRPC.context().create();

export const router = t.router;
export const publicProcedure = t.procedure;
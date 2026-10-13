import { knex as knexConfig } from "knex";

import config from "../../knexfile";

export const knext = knexConfig(config);

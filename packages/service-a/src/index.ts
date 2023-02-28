import * as uuid from "uuid";

export const generateV2  = () => {
    return `${uuid.v4()}+${uuid.v4()}`;
}
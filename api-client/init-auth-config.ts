import { Configuration } from "./configuration";
import { cookies } from "next/headers";

/**
 * Returns a Configuration instance with Authorization header if token is provided.
 */
export function getAuthConfiguration() {
    const token = cookies().get("token")?.value;

    return new Configuration({
        baseOptions: token
            ? {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            : {},
    });
}

import { getLocationsByName } from '../location-util';

interface GETProps {
    params: Promise<{ name: string }>;
}

export async function GET(request: Request, { params }: GETProps) {
    const { name } = await params;
    const location = getLocationsByName(name);
    return Response.json(location);
}

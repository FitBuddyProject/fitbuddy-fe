export interface UserDTO {
    uuid: string;
    phone: string;
    nickname: string;
    email: string;
    refreshToken: string;
    pushToken: string;
    sendable: boolean;
    joinDate: Date;
    lastModifiedDate: Date;
    lastSignInDate: Date;


    name: string;
}




export interface UserResponseDTO {
    buddies: any[] | null;  // 타입이 명확하지 않으므로 임시로 any[]로 설정
    email: string | null;
    id: string;
    joinDate: string;  // ISO 형식의 문자열
    lastModifiedDate: string;  // ISO 형식의 문자열
    lastSignInDate: string | null;
    new: boolean;
    nickname: string;
    phone: string;
    pushToken: string | null;
    sendable: boolean;
    tired: number;
    uuid: string;
}
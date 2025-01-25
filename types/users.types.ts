export type addressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
};

export type companyType = {
    name: string;
};

export type contactType = {
    id: number;
    name: string;
    username: string;
    company: companyType;
    email: string;
    phone: string;
    website: string;
    address: addressType;
};

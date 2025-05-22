interface sidebarItemsType {
    title: string;
    icon: string;
    to?: string | { name: string; params?: { tab: number; id: number } };
}


const sidebarItems: sidebarItemsType[] = [
    {
        title: 'Notas Fiscais',
        icon: 'mdi-handshake-outline',
        to: { name: 'invoices' },
    },
];  

export default sidebarItems;
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',
    },
];

export default function Clients() {
    const { clients } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Clients" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
               <Button className='w-fit'><Link href={route('clients.create')}>Add New Client</Link></Button>
               {clients.map((client) => (
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto" key={client.id}>
                        <p>{client.name}</p>
                        <p>{client.email}</p>
                        <p>{client.phone}</p>
                        <p>{client.address}</p>
                        <p>{client.dob}</p>
                        <p>{client.description}</p>
                        <p>{client.username}</p>
                        <p>{client.password}</p>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}

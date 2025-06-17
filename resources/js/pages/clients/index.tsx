import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'Clients',
href: '/clients',
},
];

export default function Clients() {

return (
<AppLayout breadcrumbs={breadcrumbs}>

    <Head title="Clients" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">

    </div>
</AppLayout>
);
}

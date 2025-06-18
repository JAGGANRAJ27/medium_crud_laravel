import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head,Link, useForm, usePage } from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Phone } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'Create New Client',
href: '/clients',
},
];
export default function ClientCreate() {
const {data,setData,errors,post} = useForm({
    name:'',
    email:'',
    phone : '',
    address : '',
    dob:'',
    description:'',
    username:'',
    password:''
})

const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('clients.store'));
}
return (
<AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Create New Client" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div>
            <Button>
                <Link href={route('clients.index')}>Back to All Clients</Link>
            </Button>
        </div>
        <h1>Create Your New Client Here Buddy!</h1>
        <form onSubmit={submit} className='space-y-6'>
            <Label>Client Name</Label>
            <Input placeholder='Client Name' value={data.name} onChange={(e) => setData('name',e.target.value)} />
            <InputError message={errors.name} className='mt-2' />
            <Label>Client Email</Label>
            <Input placeholder='Client Email' value={data.email} onChange={(e) => setData('email',e.target.value)} />
            <InputError message={errors.email} className='mt-2' />
            <Label>Client Phone</Label>
            <Input placeholder='Client Phone' value={data.phone} onChange={(e) => setData('phone',e.target.value)} />
            <InputError message={errors.phone} className='mt-2' />
            <Label>Client Address</Label>
            <Textarea className={'w-full border p-2 rounded-xl'} placeholder='Client Address' value={data.address} onChange={(e) => setData('address',e.target.value)} ></Textarea>
            <InputError message={errors.address} className='mt-2' />
            <Label>Client DOB</Label>
            <Input placeholder='Client DOB' value={data.dob} onChange={(e) => setData('dob',e.target.value)} />
            <InputError message={errors.dob} className='mt-2' />
            <Label>Client Description</Label>
            <Textarea className={'w-full border p-2 rounded-xl'} placeholder='Client Description' value={data.description} onChange={(e) => setData('description',e.target.value)} ></Textarea>
            <InputError message={errors.description} className='mt-2' />
            <Label>Client Username</Label>
            <Input placeholder='Client Username' value={data.username} onChange={(e) => setData('username',e.target.value)} />
            <InputError message={errors.username} className='mt-2' />
            <Label>Client Password</Label>
            <Input placeholder='Client Password' value={data.password} onChange={(e) => setData('password',e.target.value)} />
            <InputError message={errors.password} className='mt-2' />
            <Button type='submit'>Add Client</Button>
        </form>
    </div>
</AppLayout>
);
}

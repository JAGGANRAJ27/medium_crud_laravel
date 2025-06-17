import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'Posts',
href: '/posts',
},
];

export default function Posts() {
const { posts, flash } = usePage().props as any; // 👈 include flash props
const { delete: destroy } = useForm();

useEffect(() => {
if (flash.success) {
toast.success(flash.success);
}
if (flash.error) {
toast.error(flash.error);
}
}, [flash]);

const handleDelete = (id: number) => {
Swal.fire({
title: 'Are you sure?',
text: "You won't be able to revert this!",
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#d33',
cancelButtonColor: '#3085d6',
confirmButtonText: 'Yes, delete it!',
}).then((result) => {
if (result.isConfirmed) {
destroy(route('posts.destroy', id));
}
});
};

return (
<AppLayout breadcrumbs={breadcrumbs}>

    <Head title="Posts" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <Button className="mb-3 w-fit">
            <Link href={route('posts.create')}>Create New Post</Link>
        </Button>
        <ul className="space-y-3">
            {posts.map((post) => (
            <li key={post.id}>
                <div className="font-semibold">{post.title}</div>
                <p>{post.content}</p>
                <div className="space-x-2 mt-2">
                    <Button variant="secondary">
                        <Link href={route('posts.edit', post.id)}>Edit</Link>
                    </Button>
                    <Button variant="destructive" onClick={()=> handleDelete(post.id)}>
                        Delete
                    </Button>
                </div>
            </li>
            ))}
        </ul>
    </div>
</AppLayout>
);
}

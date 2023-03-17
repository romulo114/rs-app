import clsx from 'clsx';
import { ChangeEvent, FocusEvent } from 'react';

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm';

interface ILabel {
  id: string;
  children: React.ReactNode;
}

interface ITextField {
  id: string;
  label: string;
  type: string;
  className?: string | undefined;
  error: string | undefined | boolean;
  name?: string | undefined;
  autoComplete?: string | undefined;
  onChange?: (e: ChangeEvent<any>) => void;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  values?: any;
}

interface ISelectField {
  id: string;
  label: string;
  type: string;
  className: string | undefined;
}

function Label({ id, children }: ILabel) {
  return (
    <label
      htmlFor={id}
      className='mb-3 block text-sm font-medium text-gray-700'
    >
      {children}
    </label>
  );
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  error,
  ...props
}: ITextField) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
      <span className='text-red-dark block h-[10px]'>{error ? error : ''}</span>
    </div>
  );
}

export function SelectField({
  id,
  label,
  className = '',
  ...props
}: ISelectField) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  );
}

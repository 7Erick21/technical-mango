import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Range } from './Range';

describe('Range component', () => {
  // --- Test 1: render inicial ---
  test('renderiza inputs con valores iniciales', () => {
    render(<Range min={10} max={50} />);

    const minInput = screen.getByLabelText(/mínimo/i);
    const maxInput = screen.getByLabelText(/máximo/i);

    expect(minInput).toBeInTheDocument();
    expect(maxInput).toBeInTheDocument();

    expect(minInput).toHaveValue('10');
    expect(maxInput).toHaveValue('50');
  });

  // --- Test 2: corrige el mínimo si supera al máximo ---
  test('corrige el mínimo si supera al máximo', async () => {
    const user = userEvent.setup();
    render(<Range min={10} max={20} />);

    const minInput = screen.getByLabelText(/mínimo/i);

    await user.clear(minInput);
    await user.type(minInput, '30');
    await user.tab(); // Dispara onBlur

    // maxValue = 20, entonces min no puede superar 19
    expect(minInput).toHaveValue('19');
  });

  // --- Test 3: corrige el máximo si es menor que el mínimo ---
  test('corrige el máximo si es menor que el mínimo', async () => {
    const user = userEvent.setup();
    render(<Range min={10} max={20} />);

    const maxInput = screen.getByLabelText(/máximo/i);

    await user.clear(maxInput);
    await user.type(maxInput, '5');

    await user.tab(); // Dispara onBlur

    // max no puede ser menor que min + 1 → 11
    expect(maxInput).toHaveValue('11');
  });

  // --- Test 4: inputs vacíos se reestablecen a límites ---
  test('reestablece inputs vacíos a límites', async () => {
    const user = userEvent.setup();
    render(<Range min={10} max={20} />);

    const minInput = screen.getByLabelText(/mínimo/i);
    const maxInput = screen.getByLabelText(/máximo/i);

    await user.clear(minInput);

    await user.tab(); // dispara onBlur

    expect(minInput).toHaveValue('10'); // mínimo permitido

    await user.clear(maxInput);

    await user.tab(); // dispara onBlur

    expect(maxInput).toHaveValue('20'); // máximo permitido
  });

  // --- Test 5: modo fijo muestra min y max correctamente ---
  test('modo fijo muestra valores correctos', () => {
    const values = [5, 10, 15, 20];
    render(<Range values={values} fixed />);

    // Debe mostrar solo min y max actuales
    expect(screen.getByText('5 €')).toBeInTheDocument();
    expect(screen.getByText('20 €')).toBeInTheDocument();

    // Inputs no deben estar en el modo fijo
    expect(screen.queryByLabelText(/mínimo/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/máximo/i)).not.toBeInTheDocument();
  });
});
